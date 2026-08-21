#!/usr/bin/env python3
# HTML结构验证脚本

import re
import sys

def validate_html(file_path):
    """验证HTML文件结构"""
    print(f"🔍 验证文件: {file_path}")
    print("=" * 50)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    errors = []
    warnings = []
    
    # 1. 检查DOCTYPE
    if not content.startswith('<!DOCTYPE html>'):
        errors.append("❌ 缺少 <!DOCTYPE html>")
    
    # 2. 检查<html>标签
    if '<html' not in content:
        errors.append("❌ 缺少 <html> 标签")
    
    # 3. 检查<head>标签
    if '<head>' not in content:
        errors.append("❌ 缺少 <head> 标签")
    
    # 4. 检查</head>标签
    if '</head>' not in content:
        errors.append("❌ 缺少 </head> 标签")
    
    # 5. 检查<body>标签
    if '<body>' not in content:
        errors.append("❌ 缺少 <body> 标签")
    
    # 6. 检查</body>标签
    if '</body>' not in content:
        errors.append("❌ 缺少 </body> 标签")
    
    # 7. 检查</html>标签
    if '</html>' not in content:
        errors.append("❌ 缺少 </html> 标签")
    
    # 8. 检查<style>标签数量
    style_count = content.count('<style>')
    style_end_count = content.count('</style>')
    if style_count != style_end_count:
        errors.append(f"❌ <style>标签数量不匹配: {style_count}个开始, {style_end_count}个结束")
    elif style_count > 1:
        warnings.append(f"⚠️ 有{style_count}个<style>标签，建议合并为一个")
    
    # 9. 检查<script>标签数量
    script_count = content.count('<script>')
    script_end_count = content.count('</script>')
    if script_count != script_end_count:
        errors.append(f"❌ <script>标签数量不匹配: {script_count}个开始, {script_end_count}个结束")
    
    # 10. 检查CSS是否在<head>中
    head_end = content.find('</head>')
    if head_end != -1:
        head_content = content[:head_end]
        if '<style>' in content[head_end:]:
            errors.append("❌ CSS代码在</head>标签之后")
    
    # 11. 检查JavaScript是否在</body>前
    body_end = content.find('</body>')
    if body_end != -1:
        body_content = content[body_end:]
        if '<script>' in body_content:
            warnings.append("⚠️ JavaScript代码在</body>标签之后")
    
    # 12. 检查图片路径
    img_pattern = r'src="([^"]*)"'
    img_matches = re.findall(img_pattern, content)
    for img_path in img_matches:
        if img_path.startswith('http'):
            continue  # 跳过外部链接
        if not img_path:
            warnings.append("⚠️ 发现空的图片路径")
    
    # 13. 检查视频路径
    video_pattern = r'<source src="([^"]*)"'
    video_matches = re.findall(video_pattern, content)
    for video_path in video_matches:
        if not video_path:
            warnings.append("⚠️ 发现空的视频路径")
    
    # 输出结果
    if errors:
        print("❌ 发现错误:")
        for error in errors:
            print(f"  {error}")
    
    if warnings:
        print("⚠️ 发现警告:")
        for warning in warnings:
            print(f"  {warning}")
    
    if not errors and not warnings:
        print("✅ HTML结构验证通过！")
    
    print("=" * 50)
    return len(errors) == 0

if __name__ == "__main__":
    if len(sys.argv) > 1:
        file_path = sys.argv[1]
    else:
        file_path = "index.html"
    
    success = validate_html(file_path)
    sys.exit(0 if success else 1)
