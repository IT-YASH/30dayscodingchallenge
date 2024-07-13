document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const playPauseButton = document.getElementById('play-pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const songImage = document.getElementById('song-image');
    const playlistItems = document.querySelectorAll('.playlist li');
    
    let currentTrackIndex = 0;

    function loadTrack(index) {
        const selectedTrack = playlistItems[index];
        audioSource.src = selectedTrack.getAttribute('data-src');
        songImage.src = selectedTrack.getAttribute('data-img');
        audioPlayer.load();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }

    function playPauseTrack() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + playlistItems.length) % playlistItems.length;
        loadTrack(currentTrackIndex);
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % playlistItems.length;
        loadTrack(currentTrackIndex);
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }

    playPauseButton.addEventListener('click', playPauseTrack);
    prevButton.addEventListener('click', prevTrack);
    nextButton.addEventListener('click', nextTrack);

    playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(index);
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });

    loadTrack(currentTrackIndex);
});
