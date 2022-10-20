

export const fetchData= async<Tsr>(url:string):Promise<Tsr>=>{
    const rsp = await fetch(url);
    return await rsp.json()
}