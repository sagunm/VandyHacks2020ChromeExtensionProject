// Saves options to chrome.storage
function save_options() {
  var time = document.getElementById('time').value;
  var chosenTime = document.getElementById('choice').checked;
  chrome.storage.sync.set({
    favoriteTime: time,
    chosenTime: chosenTime
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value time = '2 hours' and chosenTime = true.
  chrome.storage.sync.get({
    favoriteTime: '2 hours',
    chosenTime: true
  }, function(items) {
    document.getElementById('time').value = items.favoriteTime;
    document.getElementById('choice').checked = items.chosenTime;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
