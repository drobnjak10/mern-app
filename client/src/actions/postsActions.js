import * as api from '../api/index'

export const getPosts = () => async dispatch => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log('error', error.message);
    }
}

export const createPost = (formData) => async dispatch => {
    try {
        const { data } = await api.createPost(formData);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log('error', error);
    }
}

export const likePost = () => async dispatch => {
    
}

export const deletePost = (id) => async dispatch => {
    console.log('id', id)
    try {
        await api.deletePost(id)
        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log('error', error);
    }
}

