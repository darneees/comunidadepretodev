const postModal = document.getElementById('postModal');
const postCategory = document.getElementById('postCategory');
const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postContent');
const postCreated = document.getElementById('postCreated');
const openPosts = document.querySelectorAll('.openPost');
const closePost = document.getElementById('closePost');
const bodyScroll = document.getElementById('body');
const main = document.getElementsByTagName('main')[0];


openPosts.forEach((openPost) => {
    openPost.addEventListener('click', () => {
        const sectionPost = openPost.closest('.section-post');
        const category = sectionPost.querySelector('[data-category]').getAttribute('data-category');
        const title = sectionPost.querySelector('[data-title]').getAttribute('data-title');
        const content = sectionPost.querySelector('[data-content]').getAttribute('data-content');
        const created = sectionPost.querySelector('[data-created]').getAttribute('data-created');


        postCategory.textContent = category;
        postTitle.textContent = title;
        postContent.textContent = content;
        postCreated.textContent = created;

        postModal.style.display = 'flex';
        bodyScroll.style.overflow = 'hidden';
        main.style.display = 'none';
    });
});

closePost.addEventListener('click', () => {
    postModal.style.display = 'none';
    bodyScroll.style.overflow = 'auto';
    main.style.display = 'flex';
});