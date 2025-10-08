const getStoredApp = () => {
    const installedApps = localStorage.getItem("installedAppsList");
    console.log(installedApps);

}

const addToStoredDB = (id) => {
    getStoredApp();
    localStorage.setItem("installedAppsList", id)
}

export { addToStoredDB };