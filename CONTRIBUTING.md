## Guidelines

### 1. Images

1. Convert all images to webp.
2. To convert images to webp, use ImageMagick or some other tool that correctly handles colorspaces. See Figure 1.1. Tools such as `cwebp` can result in washed out colours.
3. Resize images to the size they'll be used at.

```
magick file.png -resize 1400 file.webp
```
Figure 1.1: *command to convert png to webp*

> [!NOTE]
> We could perform some of these conversions automatically at build time, but doing so at development time avoids the git repository getting unnecessarily large.
