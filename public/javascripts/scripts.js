

const input = document.getElementById('photo-upload-input')

input.addEventListener('change', function(){
  const photoPreview = document.getElementById('photo-preview')

  photoPreview.classList.add('active')

  const file = input.files[0]
  const reader = new FileReader()

  reader.onload = function(e) {

    const imageDataUrl = e.target.result
    const photoPreviewImg = document.getElementById('photo-preview-image')

    photoPreviewImg.src = imageDataUrl
  }

  reader.readAsDataURL(file)
})


