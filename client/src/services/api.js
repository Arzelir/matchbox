export async function getUsers() {
    const response = await fetch("/api/users");

    const text = await response.text();

    console.log(text);

    return text;
}