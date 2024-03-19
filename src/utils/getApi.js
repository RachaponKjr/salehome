export async function GetDataAll() {
    const res = await fetch('http://18.140.121.108:5500/getsalehome',{
      method: 'GET',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }