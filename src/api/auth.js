import {supabase} from "../supabase"

export async function signUp(email, password, name, birth) {
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        name,
        birth
    })

    return{data, error}
}