const $submitButton = $('.submit');
let $deleteButton;
let index = 0;

function getInfo() {
    let name, age, gender;
    return {
        name: $(':text[name="name"]').val(),
        age: $(':text[name="age"]').val(),
        gender: $(':radio[name="gender"]:checked').val()
    };
}

function appendInfo(name, age, gender) {
    $(
        `<tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${gender}</td>
            <td><button class='delete'>x</button></td>
        </tr>`
    ).appendTo($('table'));
}

function deleteInfo(info) {
    let $trNode = info.parent().parent();
    let textContent = $trNode.find('td:first').text();
    textContent = $.trim(textContent);
    if (confirm(`do you really want to delete ${textContent}?`)) {
        $trNode.remove();
        index--;
    } else {
        return;
    }

}

$submitButton.click(function () {
    let info = getInfo();
    appendInfo(info.name, info.age, info.gender);
    $deleteButton = $('.delete');
    $deleteButton[index++].addEventListener('click', function () {
        deleteInfo($(this));
    });
    return false;
});


