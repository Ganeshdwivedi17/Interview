"use client"
import React, { useState } from 'react'
import axios from 'axios'

const ClientDemo = async () => {

    const [title, seTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [type, setType] = useState("");


    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>title of book</label>
                    <input onChange={(e) => seTitle(e.target.value)} value={title} placeholder='Enter title of book' type="text" />
                </div>
                <div>
                    <label>price of book</label>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Enter price of book' inputMode='numeric' type="number" />
                </div>
                <div>
                    <label>description of book</label>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Enter description of book' type="text" />
                </div>
                <div>
                    <label>title of author</label>
                    <input onChange={(e) => setAuthor(e.target.value)} value={author} placeholder='Enter title of book author' type="text" />
                </div>
                <div>
                    <label>image of book</label>
                    <input onChange={(e) => setThumbnail(e.target.value)} value={thumbnail} placeholder='Enter image of book' type="text" />
                </div>
                <div>
                    <label>type of book</label>
                    <input onChange={(e) => setType(e.target.value)} value={type} placeholder='Enter type of book' type="text" />
                </div>
            </form>
            <button type="submit">Create</button>
        </div>
    )
}



export default ClientDemo