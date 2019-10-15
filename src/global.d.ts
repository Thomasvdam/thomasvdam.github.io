declare module '*.scss' {
    interface ClassNames {
        [prop: string]: string;
    }
    const classNames: ClassNames;
    export default classNames;
}
