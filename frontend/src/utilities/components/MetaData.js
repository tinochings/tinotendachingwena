
export default function MetaData({ title, description }) {
    return (
        <>
            <meta
                name="format-detection"
                content="telephone=no, date=no, email=no, address=no"
            />
            <meta name="robots" content="max-image-preview:large"></meta>
            <meta name="title" content={`${title}`}></meta>
            {description !== undefined ? <meta name="description" content={description} /> : <meta name="description" content={title} />}
            <link rel="icon" href="/images/favicon/favicon.ico" type="image/x-icon" sizes="any" />
            <link rel="apple-touch-icon" href="/images/favicon/favicon.ico" />
            <title>{title}</title>
        </>
    );
}