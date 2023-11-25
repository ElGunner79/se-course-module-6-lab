const SingleCat = ({ cat }) => {
    return (
        <div>
            <h2>{cat.name}</h2>
            <img src={cat.image} alt={cat.name} />
            <p>
                <strong>Latin Name:</strong> {cat.latinName}
            </p>
        </div>
    );
};

export default SingleCat;