const apiFetch = async (restrooms, bedrooms, surface) => {
    try {
        if (surface === "" || bedrooms === "" || restrooms === "") {
            throw new Error("Please fill all the fields");
        }
        if (surface < 0 || bedrooms < 0 || restrooms < 0) {
            throw new Error("Please enter a positive number");
        }
        if (surface > 1000 || bedrooms > 10 || restrooms > 10) {
            throw new Error("Please enter a surface between 0 and 1000, and bedrooms and restrooms between 0 and 10");
        }
        const response = await fetch(
            `https://ibaivalente.pythonanywhere.com/predict?surface=${surface}&bedrooms=${bedrooms}&restrooms=${restrooms}&provincia=Bizkaia`
        );
        //gestionar texto crudo
        const data = await response.text();
        return data;
    } catch (error) {
        return error.message;
    }
};

export default apiFetch;