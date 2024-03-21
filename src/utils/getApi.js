// ใช้กับ server component
export async function GetDataAll({id}) {
    const res = await fetch(`http://18.140.121.108:5500/getsalehome/${id}`,{
      method: 'GET',
      next: { revalidate: 0 },
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }



// ใช้กัย client component
export function GetData(id) {
    const res =  fetch(`http://18.140.121.108:5500/getsalehome/${id}`,{
      method: 'GET',
      next: { revalidate: 0 },
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }