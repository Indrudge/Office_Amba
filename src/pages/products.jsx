import React from 'react';
import { useSearchParams } from 'react-router-dom';

const products = [
    {id:1, title:"pipes", catagory:"plumbing"},
    {id:2, title:"taps", catagory:"plumbing"},
    {id:3, title:"wires", catagory:"electrical"},
    {id:4, title:"switchs", catagory:"electrical"},
    {id:5, title:"bricks", catagory:"buildmat"},
    {id:6, title:"cement", catagory:"buildmat"},
];

function Products(){

    const [searchParams, setSearchParams] = useSearchParams();
    const catagory = searchParams.get("catagory");

    const filtered = catagory ? products.filter((p) => p.catagory === catagory):products;

    return(

        <div>
            <button onClick = {() => setSearchParams({ catagory:"plumbing"})}>Plumbing</button>
            <button onClick = {() => setSearchParams({ catagory:"electrical"})}>electrical</button>
            <button onClick = {() => setSearchParams({ catagory:"buildmat"})}>building matarial</button>
            <button onClick = {() => setSearchParams({})}>Showall</button>

            {filtered.map((p) => (
                <p key={p.id}>{p.title}</p>
            ))}
        </div>
      
    );
}

export default Products;