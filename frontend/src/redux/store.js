import { configureStore } from "@reduxjs/toolkit";


const taskreducer = () => {
    return {
        todo: [
            {
                whattodo: 'get it done',
                status: false
            },
            {
                whattodo: 'fuck',
                status: false
            }
        ]
    }
}

export default configureStore({
    reducer: {
        Task: () => taskreducer() 
    }
})
