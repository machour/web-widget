

export interface IMessageTypeProps {
    message: IMessage,
    messageHandler: Function,
    conf?: IConfiguration,
}

export interface IMessage {
    text: string,
    type: "text" | "list",
    from: string,
    time?: string,
    actions?: IAction[],
    buttons?: IButton[],
    attachment?: IAttachment,
    globalButtons?: IButton[],
    additionalParameters?: String[],
    elements?: IElement[],
}

export interface IAttachment {
    url?: string,
    type?: string,
}

export interface IElement {
    title : string,
    image_url: string,
    item_url: string,
    subtitle: string,
    default_action: IAction,
    buttons: IButton[],
}


export interface IButton {
    type: string,
    title: string,
    url: string,
    payload: string,
}

export interface IAction {
    text: string,
    value: string,
}

export interface IConfiguration {
    /**
     * The URL of the BotMan route / server to use.
     */
    chatServer: string,
    /**
     * The location of your chat frame URL / route.
     */
    frameEndpoint: string,
    /**
     * Date and time format to use
     */
    timeFormat: string;
    dateTimeFormat: string,
    /**
     * The title to use in the widget header.
     */
    title: string,
    /**
     * How many days is the cookie valid?
     */
    cookieValidInDays: number,
    /*
     * This is a welcome message that every new user sees
     * when the widget is opened for the first time.
     */
    introMessage: string,
    /*
     * Input placeholder text
     */
    placeholderText: string,
    /*
     * Toggle display of message times
     */
    displayMessageTime: boolean,
    mainColor: string,
    bubbleBackground: string,
    bubbleAvatarUrl: string,
    desktopHeight: number,
    desktopWidth: number,
    mobileHeight: string,
    mobileWidth: string,
    videoHeight: number,
    aboutLink: string,
    aboutText: string,
    chatId: string,
    userId: string,
    wrapperHeight?: number,
    alwaysUseFloatingButton: boolean,
}