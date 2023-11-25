import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const catsData = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg' },
];

//Part 1
// const BigCats = () => {
//     return (
//         <div>
//             <h1>Big Cats</h1>
//             <ul>
//                 {cats.map((cat, index) => (
//                     <li key={index}>
//                         <strong>{cat.name}:</strong> {cat.latinName}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BigCats;

//Part 2

// const BigCats = () => {
//     return (
//         <div>
//             <h1>Big Cats</h1>
//             <ul>
//                 {cats.map((cat) => (
//                     <li key={cat.name}>
//                         <strong>{cat.name}:</strong> {cat.latinName}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BigCats;

//Part 3

// import SingleCat from './SingleCat';

// const BigCats = () => {
//     return (
//         <div>
//             <h1>Big Cats</h1>
//             {cats.map((cat) => (
//                 <SingleCat key={cat.name} cat={cat} />
//             ))}
//         </div>
//     );
// };

// export default BigCats;

//Part 4 (Lab 4)

const BigCats = () => {
    const [cats, setCats] = useState(catsData);

    // Lab 4.2
    const [isPantheraFilter, setIsPantheraFilter] = useState(false);

    // Lab 4.1
    const sortAlphabetically = () => {
        const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
        setCats(sortedCats);
    };

    const reverseList = () => {
        const reversedCats = [...cats].reverse();
        setCats(reversedCats);
    };

    // Lab 4.2
    const filterPanthera = () => {
        if (isPantheraFilter) {
            setCats(catsData);
        } else {
            setCats(
                cats.filter((cat) => cat.latinName.includes('Panthera'))
            );
        }
        setIsPantheraFilter(!isPantheraFilter);
    };

    const resetFilter = () => {
        setCats(catsData);
        setIsPantheraFilter(false);
    };

    // Lab 5

    const addCat = (cat) => {
        const newCat = { ...cat, id: cats.length + 1 };
        setCats([...cats, newCat]);
    };

    const deleteCat = (id) => {
        const updatedCats = cats.filter((cat) => cat.id !== id);
        setCats(updatedCats);
    };

    return (
        <div>
            <h1>Big Cats</h1>
            <div>
                {/*Lab 4.1 */}
                <button onClick={sortAlphabetically}>Sort Alphabetically</button>
                <button onClick={reverseList}>Reverse List</button>
                {/*Lab 4.2 */}
                <button onClick={filterPanthera}>Filter Panthera</button>
                <button onClick={resetFilter}>Reset Filter</button>
            </div>
            {/* Lab 4.1.2
                {cats.map((cat) => (
                <SingleCat key={cat.name} cat={cat} /> */}
            {/*Lab 5 */}
            <AddCatForm addCat={addCat} />
            {cats.map((cat) => (
                <div key={cat.id}>
                    <SingleCat cat={cat} />
                    <button onClick={() => deleteCat(cat.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BigCats;