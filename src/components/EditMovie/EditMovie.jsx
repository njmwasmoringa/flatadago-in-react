import { useEffect, useState } from "react";
import "./editmovie.css";
import apiClient from "../../services/api-client";

export default function EditMovie({ movie, onClose, onSave }) {

    const [formData, setFormData] = useState();
    const [isSaving, setIsSaving] = useState(false);

    useEffect(()=>{
        setFormData(movie);
    }, [movie]);

    /* const [title, setTitle] = useState(movie.title);
    const [description, setDescription] = useState(movie.description);
    const [time, setTime] = useState(movie.showtime); */

    function handleFormDataChange(evt){
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        
        setIsSaving(true);
        apiClient.patch(`/films/${formData.id}`, formData).then(response=>{
            onSave(response.data);
            setIsSaving(false);
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

    return (<form id="edit-movie-form" onSubmit={handleSubmit}>
        <h3>Edit Movie</h3>
        <hr />
        <div>
            <label>Title</label>
            <input type="text" name="title" value={formData && formData.title} onChange={handleFormDataChange} />
        </div>

        <br/>
        <div>
            <label>Description</label>
            <textarea  name="description" rows="2" onChange={handleFormDataChange} defaultValue={formData && formData.description}></textarea>
        </div>

        <br/>
        <div>
            <label>Show Time</label>
            <input type="time" name="showtime" value={formData && formData.showtime} onChange={handleFormDataChange} />
        </div>
        <br/>
        <div>
            <button onClick={onClose} type="button">Cancel</button> &nbsp;&nbsp;
            <button disabled={isSaving}>{isSaving ? "Saving..." : "Save"}</button>
        </div>

    </form>);

}