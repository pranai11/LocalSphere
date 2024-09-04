const handleEditBlog = async (blogId, updatedData) => {
  console.log('Editing blog with ID:', blogId);
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/Blogs/${blogId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Blog updated successfully:', result);
    // Handle successful update (e.g., show a success message, refresh the blog list)
  } catch (error) {
    console.error('Error updating blog:', error);
    // Handle error (e.g., show an error message to the user)
  }
};

const fetchData = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/Blogs`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Handle the data
  } catch (error) {
    console.error('Error fetching blogs:', error);
    // Display an error message to the user
  }
};