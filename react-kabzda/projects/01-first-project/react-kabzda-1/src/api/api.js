import axios from "axios"

const instance = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '6bab184b-fc5c-4627-97a4-b57a94d387fd',
    }
})

export const UserAPI = {
    getUsers (pagesSize, currentPage) {
        return instance.get(`users?count=${pagesSize}&page=${currentPage}`)
        .then(response => response.data)
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`)
    },    
    follow (id) {
        return instance.post(`follow/${id}`)
    }
}

export const ProfileAPI = {
    setProfile(userId) {
        return instance.get('profile/' + userId)
        .then(response => response.data)
    },
    
    setStatus(userId) {
        return instance.get('profile/status/' + userId)
        .then(response => response.data)
    },

    updateStatus(status) {
        return instance.put('profile/status', {status: status})
        .then(response => response.data)
    }
}

export const setAuthMe = () => {
    return instance.get(`auth/me`)
    .then(response => response.data)
}

