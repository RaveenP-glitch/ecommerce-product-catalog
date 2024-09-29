import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useKeywordMapper = (keyword) => {
    const allCategories = useSelector((state) => state.categories.categories)

    const dynamicKeywordMap = useMemo(() => {
        return allCategories.reduce((map, category) => {
            map[category.slug] = category.name;
            return map;
        }, {});
    }, [allCategories]);

    return dynamicKeywordMap[keyword];
};

export default useKeywordMapper;
