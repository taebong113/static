document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');

    if (!postsContainer) {
        console.error("Error: posts-container element not found.");
        return;
    }

    fetch('/posts/api') // API 엔드포인트 확인
        .then(response => response.json())
        .then(data => {
            console.log("Loaded posts:", data); // 데이터 로드 확인

            // 처음 4개의 게시물만 표시
            data.slice(0, 4).forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post-card';
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <a href="/posts/${post.id}">View Details</a>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading posts:', error));
});
