export function reformatDate(date) {
    const day = date;
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(day).toLocaleDateString('en-US', options);
}