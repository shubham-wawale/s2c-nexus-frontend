const studentLogin = (data)=> {
    return {
        type: "STUDENT_LOG_IN",
        payload: data
    }
}

export default studentLogin;