import { useEffect, useState } from "react";
import "./editmovie.css";
import apiClient from "../../services/api-client";

export default function EditMovie({ movie, onClose }) {

    const [formData, setFormData] = useState(movie);

    /* const [title, setTitle] = useState(movie.title);
    const [description, setDescription] = useState(movie.description);
    const [time, setTime] = useState(movie.showtime); */

    function handleFormDataChange(evt){
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }

    /* function handleTitleChange(evt){
        setTitle(evt.target.value);
    }

    function handleDescriptChange(evt){
        setDescription(evt.target.value);
    }

    function handleShowTimeChange(evt){
        setTime(evt.target.value);
    } */

    return (<form id="edit-movie-form">
        <h3>Edit Movie</h3>
        <hr />
        <div>
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleFormDataChange} />
        </div>

        <br/>
        <div>
            <label>Description</label>
            <textarea  name="description" rows="2" onChange={handleFormDataChange} defaultValue={formData.description}></textarea>
        </div>

        <br/>
        <div>
            <label>Show Time</label>
            <input type="time" name="showtime" value={formData.showtime} onChange={handleFormDataChange} />
        </div>
        <br/>
        <div>
            <button onClick={onClose} type="button">Cancel</button> &nbsp;&nbsp;
            <button>Save</button>
        </div>

    </form>);

}