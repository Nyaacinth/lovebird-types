/**
 * Lovebird
 * @description A browser-based debug console for the LÖVE framework
 * @link https://github.com/rxi/lovebird
 * @version 0.4.3
 * @author rxi
 * @license MIT
 */
declare module "lovebird" {
    /**
     * The port which lovebird listens for connections on
     * @default 8000
     */
    let port: number

    /**
     * An array of hosts which lovebird will accept connections from
     * @default ["127.0.0.1"]
     */
    let whitelist: string[] | null

    /**
     * Whether lovebird should wrap the `print()` function or not, if this is true then all the calls to print will also be output to lovebird's console
     * @default true
     */
    let wrapprint: boolean

    /**
     * Whether lovebird should display inputted commands in the console's output buffer
     * @default true
     */
    let echoinput: boolean

    /**
     * The maximum number of lines lovebird should store in its console's output buffer
     * @default 200
     */
    let maxlines: number

    /**
     * The interval in seconds that the page's information is updated
     * @default 0.5
     */
    let updateinterval: number

    /**
     * Whether prints should allow HTML, if this is true then any HTML which is printed will be rendered as HTML
     * @default false
     */
    let allowhtml: boolean

    /**
     * Prints its arguments to lovebird's console
     * @param vargs Things to print
     * @noSelf
     */
    function print(...vargs: any[]): void

    /** Clears the contents of the console */
    function clear(): void

    /** Update the console, handle new connection or update page content */
    function update(): void
}
