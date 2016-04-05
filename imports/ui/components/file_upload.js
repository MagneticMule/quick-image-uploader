import './file_upload.html';
import './file_upload.css';

Template.fileUpload.events({

    "mouseover .dropzone": function (event) {
    },
    "mouseleave .dropzone": function (event) {
    },
    "drop .dropzone": function (event) {
        event.preventDefault(); // prevent the default event behaviour of opening the dropped file in the browser
        event.target.className = 'dropzone';

        var files = event.originalEvent.dataTransfer.files; // this is necessary when using Jquery
        if (files) {
            console.log(files);
            uploadFiles(event.originalEvent, files);
        }
    },
    "dragover .dropzone": function (event) {
        event.target.className = 'dropzone dragover';
        return false;
    },
    "dragleave .dropzone": function (event) {
        event.target.className = 'dropzone';
        return false;
    },
    "click .dropzone": function () {
        document.getElementById('hiddenFileInput').click();
    }
});
