// ใช้กับ server component
export async function GetDataAll() {
    const res = await fetch('http://18.140.121.108:5500/getsalehome',{
      method: 'GET',
      next: { revalidate: 0 },
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }