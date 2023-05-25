# Iconsax Cheat Sheet

:[https://grxvityhj.github.io/iconsax](https://grxvityhj.github.io/iconsax)

Another great cheat sheet made by other creator, **glenthemes**, can be found here:\
[https://glenthemes.tumblr.com/icons/iconsax](https://glenthemes.tumblr.com/icons/iconsax)

## Iconsax

Iconsax is an open-source library made by [Vuesax](https://vuesax.com//), containing 1000 icons with 6 different styles. Check out [https://iconsax.io/](https://iconsax.io/) for more details and icons for other platforms.

## Getting started

Include the script inside the `<head>`.

```html
<script src="https://grxvityhj.github.io/iconsax/script.js"></script>
```

(Codes are all written in vanillaJS so no need for jQuery.)

## Usage

Head to [cheat sheet page](https://grxvityhj.github.io/iconsax) to retrieve icons by name, and paste your code by the following rules below:

```html
<i class="iconsax" type="linear" stroke-width="1.5" icon="(icon name)"></i>
```

For brand or company logos, additional class `brand` is required.

```html
<i class="iconsax brand" type="linear" stroke-width="1.5" icon="instagram"></i>
```

## Usage: Simplify

Attributes can be omitted for `linear` type with `1.5` of `stroke-width`.

```html
<i class="iconsax" icon="(icon name)"></i>
```

Example for `linear` type with `stroke-width` `2`:

```html
<i class="iconsax" stroke-width="2" icon="(icon name)"></i>
```

## Attributes

| Attributes   | Type     | Required | Default           |
| ------------ | -------- | -------- | ----------------- |
| type         | `string` | no       | `linear`          |
| stroke-width | `string` | no       | `1.5`             |
| icon         | `string` | yes      | `(its icon name)` |

👉 **stroke** is set to `currentColor` by default.\
👉 No styles are applied.

### Disclaimer

**I do not own any of the icons**. All rights belong to Vuesax.

This project fully supports `linear` style only. (Will be adding `bold` style soon.)

## License

[MIT License](https://github.com/grxvityhj/iconsax-prev/blob/main/LICENSE)
