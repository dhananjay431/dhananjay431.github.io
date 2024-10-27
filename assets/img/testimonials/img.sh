for file in *.jpg *.png; do cwebp "$file" -o "${file%.*}.webp"; done
