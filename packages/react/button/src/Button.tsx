import classNames from "classnames";
import Link from "next/link";
 
function Button(props:ButtonProps) {
    const {
        children,
        label = "",
        onClick,
        as = "button",
        href,
        variant = "primary",
        kind = "solid",
        type = "button",
        size = "md",
        radius = "md",
        ref,
        disabled,
        icon,
        iconPosition,
    } = props;

    const prefix = "button";

    const Tag = `${as}` as React.ElementType;
    const content = label || children;

    return (
        <Tag 
            href={href}
            type={type}
            ref={ref}
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                prefix,
                kind && `${prefix}-${kind}`,
                variant && `${prefix}-${variant}`,
                size && `${prefix}-${size}`,
            )} 
        >
            {content}

            {icon && (
                 <span
                     className={classNames(
                         `${prefix}-icon`,
                         iconPosition && `${prefix}-icon-${iconPosition}`,
                     )}
                 >
                     {icon}
                 </span>
             )}
        </Tag>
    );
}

export default Button;

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: any;
    ref?: any;
    label?: string;
    as?: string | "a" | "button" | "link";
    variant?: string | "primary" | "secondary" | "link" | "success" | "warning" | "danger" | "info";
    kind?: string | "solid" | "outline" | "ghost" | "subtle";
    type?: string | "submit" | "button" | "reset";
    size?: string | "md";
    radius?: string | "md";
    href?: string;
    block?: boolean;
    active?: boolean;
    disabled?: boolean;
    isLoading?: boolean;

    icon?: any;
    iconPosition?: any;
}


 
 
// function Button(props: ButtonProps) {
//     const {
//         children,
//         label = "",
//         onClick,
//         as = "button",
//         href,
//         variant = "primary",
//         kind = "solid",
//         type = "button",
//         size = "md",
//         radius = "md",
//         ref,
//         disabled,
//         isLoading,
//         block,
//         active,
//         icon,
//         iconPosition,
//     } = props;

//     const prefix = "button";
//     const className = classNames(
//         prefix,
//         kind && `${prefix}-${kind}`,
//         variant && `${prefix}-${variant}`,
//         size && `${prefix}-${size}`,
//         {
//             [`${prefix}-block`]: block,
//             [`${prefix}-active`]: active,
//             [`${prefix}-loading`]: isLoading,
//         },
//     );
//     const Tag = `${as}` as React.ElementType;
//     const content = label || children;

//     return (
//         <Tag 
//             href={href}
//             type={type}
//             ref={ref}
//             onClick={onClick}
//             disabled={disabled}
//             className={className}
//         >
//             {content}
//             {icon && (
//                 <span
//                     className={classNames(
//                         `${prefix}-icon`,
//                         iconPosition && `${prefix}-icon-${iconPosition}`,
//                     )}
//                 >
//                     {icon}
//                 </span>
//             )}
//         </Tag>
//     );
// }

// export default Button;

// interface ButtonProps {
//     className?: string;
//     children?:

// import Link from "next/link";

// function Button(props: ButtonProps) {
//   const {
//     children,
//     label = "",
//     onClick,
//     variant = "primary",
//     kind = "solid",
//     type = "button",
//     size = "md",
//     radius = "md",
//     ref,
//     disabled,
//     href,
//   } = props;

//   const prefix = "button";

//   const content = label || children;

//   return href ? (
//     <Link href={href}>
//       <a


// import classNames from "classnames";

// function Button(props) {
//   const {
//     children,
//     label = "",
//     onClick,
//     as = "button",
//     href,
//     variant = "primary",
//     kind = "solid",
//     type = "button",
//     size = "md",
//     radius = "md",
//     ref,
//     disabled,
//   } = props;

//   const prefix = "button";
//   const Tag = `${as}` as React.ElementType;
//   const content = label || children;

//   const classNameMap = {
//     [prefix]: true,
//     [`${prefix}-${kind}`]: kind && kind !== "solid",
//     [`${prefix}-${variant}`]: variant && variant !== "primary",
//     [`${prefix}-${size}`]: size && size !== "md",
//   };

//   return (
//     <Tag
//       href={href}
//       type={type}
//       ref={ref}
//       onClick={onClick}
//       disabled
