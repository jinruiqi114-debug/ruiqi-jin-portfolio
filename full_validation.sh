#!/bin/bash
# 完整验证流程

FILE="index.html"
BACKUP_DIR="/Users/inesjin/Desktop/ruiqi-jin-portfolio-backup"
VALIDATE_SCRIPT="/tmp/validate_html.py"

echo "🔍 开始完整验证流程..."
echo "=" * 60

# 1. 验证HTML结构
echo "1️⃣ 验证HTML结构..."
python3 "$VALIDATE_SCRIPT" "$FILE"
if [ $? -ne 0 ]; then
    echo "❌ HTML结构验证失败"
    exit 1
fi

# 2. 检查文件数量
echo "2️⃣ 检查文件数量..."
TOTAL_FILES=$(find . -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.mp4" -o -name "*.mov" -o -name "*.MOV" -o -name "*.webp" \) | wc -l)
echo "📁 总共 $TOTAL_FILES 个媒体文件"

# 3. 检查图片文件
echo "3️⃣ 检查图片文件..."
IMG_FILES=$(find . -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" \) | wc -l)
echo "🖼️ $IMG_FILES 个图片文件"

# 4. 检查视频文件
echo "4️⃣ 检查视频文件..."
VIDEO_FILES=$(find . -type f \( -name "*.mp4" -o -name "*.mov" -o -name "*.MOV" \) | wc -l)
echo "🎬 $VIDEO_FILES 个视频文件"

# 5. 检查HTML中的引用
echo "5️⃣ 检查HTML中的引用..."
IMG_REFS=$(grep -oE 'src="[^"]*"' "$FILE" | grep -E '\.(jpg|jpeg|png|gif|webp)' | wc -l)
VIDEO_REFS=$(grep -oE 'src="[^"]*"' "$FILE" | grep -E '\.(mp4|mov|MOV)' | wc -l)
echo "🖼️ HTML中引用了 $IMG_REFS 个图片"
echo "🎬 HTML中引用了 $VIDEO_REFS 个视频"

# 6. 检查GitHub状态
echo "6️⃣ 检查GitHub状态..."
git status

# 7. 检查远程同步状态
echo "7️⃣ 检查远程同步状态..."
git fetch origin
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)
if [ "$LOCAL" = "$REMOTE" ]; then
    echo "✅ 本地与远程同步"
else
    echo "⚠️ 本地与远程不同步"
fi

echo "=" * 60
echo "✅ 完整验证流程完成"
