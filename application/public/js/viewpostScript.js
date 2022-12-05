let commentsDiv = document.getElementById("commentDiv")

let placeholderImageCounter = 0
//let placeholderNames = ['login', 'register', 'post', 'view']

let i;
for (i = 0; i < 4; i++) {

    //if (placeholderImageCounter > 3) {
    //    placeholderImageCounter = 0
    //}

    let comment = document.createElement('div')
    comment.setAttribute('class', 'comments')
    //ab.style.width = '30rem'
    //ab.style.marginInline = '1.5rem'

//removal of pfp, may implement or not
    //let pic = document.createElement('img')
    //pic.setAttribute('src', '/public/images/'+placeholderNames[placeholderImageCounter++]+'.png')
    //pic.style.gridArea =  'pic'

    //pic.style.height = '3rem';
    //pic.style.display = 'block';
    //pic.style.marginRight = 'auto';

    let user = document.createElement('div')
    user.style.gridArea= 'uname'
    user.style.fontWeight = 'bold'

    user.innerText = "username placeholder"

    let stamp = document.createElement('div')
    stamp.style.gridArea = 'stamp'

    stamp.innerText = 'XX/XX/XXXX XX:XX'

    let com = document.createElement('div')
    com.style.gridArea = 'comment'


    com.innerText = 'potenti nullam ac tortor vitae purus ' +
        'faucibus ornare suspendisse sed nisi lacus sed viverra '


    //comment.appendChild(pic)
    comment.appendChild(user)
    comment.appendChild(stamp)
    comment.appendChild(com)


    //ab.addEventListener('click', e => {
    //    e.currentTarget.remove()
    //})

    commentsDiv.appendChild(comment)
}

let newCommentDiv = document.createElement('form')

newCommentDiv.style.paddingInline = '2rem'
newCommentDiv.style.display = 'flex'
newCommentDiv.style.justifyContent = 'space-around'
newCommentDiv.style.marginTop = '2rem'

let inp = document.createElement('input')
inp.setAttribute('class', 'inputBoxes')
inp.style.width ='20rem'
inp.style.height = '2rem'
inp.setAttribute('required', 'true')

newCommentDiv.appendChild(inp)

let sub = document.createElement('button')
sub.setAttribute('class', 'submitButtons')
sub.setAttribute('type', 'submit')
sub.innerText = 'submit'

newCommentDiv.appendChild(sub)

commentsDiv.appendChild(newCommentDiv)


/*
button.setAttribute('class', 'commentButton newCommentButton')
button.style.height = '3rem'
button.style.width = '12rem'
button.innerText = "new comment"
button.style.padding = '1rem 0 0 0'
button.style.marginInline = 'auto'
button.style.position = 'sticky'
button.style.bottom = '1rem'
button.addEventListener('click', e => {
    if (co > 3) {co = 0}
    let n = document.createElement('div')
    n.setAttribute('class', 'commentDivs')
    n.style.width = '30rem'
    n.style.marginInline = '1.5rem'
    let pic = document.createElement('img')
    pic.setAttribute('src', '/public/images/'+ar[co++]+'.png')
    pic.style.height = '3rem';
    pic.style.display = 'block';
    pic.style.marginRight = 'auto';
    pic.style.gridArea = 'pic'
    let user = document.createElement('div')
    user.style.gridArea= 'uname'
    user.innerText = "username"
    let com = document.createElement('div')
    com.style.gridArea = 'comment'
    com.innerText = 'potenti nullam ac tortor vitae purus ' +
        'faucibus ornare suspendisse sed nisi lacus sed viverra '
    n.appendChild(user)
    n.appendChild(com)
    n.appendChild(pic)
    n.addEventListener('click', e => {e.currentTarget.remove()})
    mm.removeChild(button)
    mm.appendChild(n)
    mm.appendChild(button)
    mm.scroll(0, mm.scrollHeight)
})
 */



