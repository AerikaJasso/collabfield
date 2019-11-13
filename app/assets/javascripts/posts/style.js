$(document).on('turbolinks:load', function() {
    if ($(".single-post-card").length) {
        if (mode == 1) {
            $(".single-post-card").each(function() {
                $(this).addClass("solid-color-mode");
                $(this).css('background-color', randomColor());
            });
        }
        else {
            $(".single-post-card").each(function() {
                $(this).addClass("border-color-mode");
                $(this).css('border', '5px solid ' + randomColor());
            });
        }
    }

    $('#feed').on( 'mouseenter', '.single-post-list', function() {
        $(this).css('border-color', randomColor());
    });

    $('#feed').on( 'mouseleave', '.single-post-list', function() {
        $(this).css('border-color', 'rgba(0, 0 , 0, 0.05)');
    });

});

let colorSet = randomColorSet();
let mode = Math.floor(Math.random() * 2);

// Randomly returns a color scheme
function randomColorSet() {
    let colorSet1 = ['#0E0F25', '#313658', '#F2DABD', '#F26B6B', '#F2A391'];
    let colorSet2 = ['#FF6138', '#FFFF9D', '#BEEB9F', '#79BD8F', '#79BD8F'];
    let colorSet3 = ['#FCFFF5', '#D1DBBD', '#91AA9D', '#3E606F', '#193441'];
    let colorSet4 = ['#004358', '#1F8A70', '#BEDB39', '#FFE11A', '#FD7400'];
    let colorSet5 = ['#C85B6C', '#FE7568', '#FCCA6C', '#548FCC', '#315B8A'];
    let colorSet6 = ['#FEDA84', '#FF9B83', '#976393', '#685489', '#43457F'];
    let colorSet7 = ['#144C59', '#778C80', '#9EA68D', '#8C644D', '#59372F'];
    let randomSet = [colorSet1, colorSet2, colorSet3, colorSet4, colorSet5, colorSet6, colorSet7];
    return randomSet[Math.floor(Math.random() * randomSet.length )];
}


function randomColor() {
    const color = colorSet[Math.floor(Math.random() * colorSet.length)];
    return color;
}