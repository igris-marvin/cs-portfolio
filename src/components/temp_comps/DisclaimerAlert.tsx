import { AlertDialog } from "radix-ui";
import { useEffect, useState } from "react";
import "../../assets/styles/alert.css"

export const DisclaimerAlert = () => {

    // state for the alert
    // remember on session storage
    // time memory to 24 hours
    // viewed true false
    const [viewed, setViewed] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(
        () => {

            const localViewed = sessionStorage.getItem("viewed");

            if (!viewed && (localViewed === null) ) {

                setIsOpen(true);
            } else {
                setIsOpen(false);
            }

            // return () => {
            //     localStorage.removeItem("viewed");
            // }
            console.log(isOpen);
            

        },
        [viewed]
    )

    // FUNCTIONS
    const closeAlert = () => {
        setViewed(true); // triggers useEffect to close the alert
        // save to local storage
        sessionStorage.setItem("viewed", "true");
    }

    return (
        <>
            <AlertDialog.Root open={isOpen} defaultOpen={true}>
                {/* <AlertDialog.Trigger asChild>
                    <button
                    className="Button violet"

                    >Got it!</button>
                </AlertDialog.Trigger> */}
                <AlertDialog.Portal>
                    <AlertDialog.Overlay className="AlertDialogOverlay" />
                    <AlertDialog.Content className="AlertDialogContent" >
                        <AlertDialog.Title className="AlertDialogTitle">
                            Quick Notice
                        </AlertDialog.Title>
                        <AlertDialog.Description className="AlertDialogDescription">
                            This portfolio website is still under development, however all information posted here is valid.
                        </AlertDialog.Description>
                        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
                            {/* <AlertDialog.Cancel asChild>
                                <button className="Button mauve">Cancel</button>
                            </AlertDialog.Cancel> */}
                            <AlertDialog.Action asChild>
                                <button
                                    className="Button violet"
                                    onClick={closeAlert}
                                >
                                    Got it!
                                </button>
                            </AlertDialog.Action>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Portal>
            </AlertDialog.Root>
        </>
    )
}