// User functions

// Getting all user data
export async function getUsers() {
    const response = await fetch("/api/users");
    return response.json();
}

// Getting a single user by ID
export async function getUserById(userId) {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
}

// Creating a new user
export async function createUser(userData) {
    const response = await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}

// Updating user information
export async function updateUser(userId, userData) {
    const response = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}

// Deleting a user
export async function deleteUser(userId) {
    const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
    });
    return response.json();
}

// Events functions

// Getting all events
export async function getEvents() {
    const response = await fetch("/api/event");
    return response.json();
}

// Getting a single event by ID
export async function getEventById(eventId) {
    const response = await fetch(`/api/event/${eventId}`);
    return response.json();
}

// Creating a new event
export async function createEvent(eventData) {
    const response = await fetch("/api/event", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
    });
    return response.json();
}

// Updating event information
export async function updateEvent(eventId, eventData) {
    const response = await fetch(`/api/event/${eventId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
    });
    return response.json();
}

// Deleting an event
export async function deleteEvent(eventId) {
    const response = await fetch(`/api/event/${eventId}`, {
        method: "DELETE",
    });
    return response.json();
}