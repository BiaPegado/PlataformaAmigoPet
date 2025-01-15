document.addEventListener("DOMContentLoaded", () => {
  const popupButton = document.querySelector(".popup");
  const popupText = document.getElementById("myPopup");

  popupButton.addEventListener("mouseenter", () => {
      popupText.classList.add("show");
  });

  popupButton.addEventListener("mouseleave", () => {
      popupText.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const popupButton = document.querySelector(".popup2");
  const popupText = document.getElementById("myPopup2");

  popupButton.addEventListener("mouseenter", () => {
      popupText.classList.add("show");
  });

  popupButton.addEventListener("mouseleave", () => {
      popupText.classList.remove("show");
  });
});


let currentPage = 1;
let totalPages = 2;

function changePage(page) {
    currentPage = page;
    updatePageDisplay();
}

function changePreviousPage() {
    if (currentPage > 1) {
        currentPage--;
    }
    updatePageDisplay();
}

function changeNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
    }
    updatePageDisplay();
}

function updatePageDisplay() {
    document.querySelectorAll('.pagina').forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(`page-${currentPage}`).style.display = 'block';

    document.querySelectorAll('#pagination button').forEach(button => {
        button.disabled = false;
    });
    document.querySelector(`#pagination button:nth-child(${currentPage + 1})`).disabled = true;
}

function searchFunction() {
    const searchQuery = document.getElementById('searchInput').value.trim();
    if (searchQuery) {
        alert(`Você está buscando por: ${searchQuery}`);
    } else {
        alert("Por favor, insira um termo de pesquisa.");
    }
}
