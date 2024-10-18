const createMailtoLink = (email: string, subject: string, body: string) => {
    return `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;
};

export const masterUrl = createMailtoLink(
    "code.kapish@gmail.com",
    "Great Work Kapish",
    "We Works on Various Projects"
);
