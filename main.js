import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = "https://jgfuvbcyjvaqkwosrvog.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnZnV2YmN5anZhcWt3b3Nydm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNDgzMzcsImV4cCI6MjA1NzgyNDMzN30.RNRA-Eq9dQfos44S7awGi_gxTIT7NAaRrCXk5vLsrr8";
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*')

    if (error) {
        console.error("Error fetching books:", error);
        return;
    }

    const bookList = document.getElementById('books');
    bookList.innerHTML = "";

    books.forEach(book => {
        const row = `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
        </tr>`;
        bookList.innerHTML += row;
    });
}

document.addEventListener('DOMContentLoaded', fetchBooks);