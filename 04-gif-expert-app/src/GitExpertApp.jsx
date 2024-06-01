import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categorias.includes(newCategory)) return;

        setCategorias([newCategory, ...categorias]);
    }

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {categorias.map(categoria => (
                <GifGrid key={categoria} category={categoria} />
            ))}
        </>
    );
}
