document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.attatchEventListeners();
    // console.log(app)
    app.adapter.fetchNotes().then(app.createNotes);
});