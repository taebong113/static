document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');

    if (!postsContainer) {
        console.error("Error: posts-container element not found.");
        return;
    }

    fetch('/posts/api') // 모든 게시물을 가져오는 API 엔드포인트 확인
        .then(response => response.json())
        .then(data => {
            console.log("Loaded posts:", data); // 데이터 로드 확인

            // 모든 게시물 표시
            data.forEach(post => {
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
