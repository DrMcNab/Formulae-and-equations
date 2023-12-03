window.onload = function() {
    var urls = [
        'https://forms.office.com/e/V2vrDNLQfD',
        'https://forms.office.com/e/uh1xyAf5DP',
        'https://forms.office.com/e/FDJNHCCwFu',
        'https://forms.office.com/e/ZGc0aGc8jN'
    ];
    var randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
};
