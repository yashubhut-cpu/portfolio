import { useState } from "react";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import useTheme from "../hooks/useTheme";
import { useIsTablet, useIsSmallMobile } from "../hooks/useMediaQuery";
import { glass, flexCenter, SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, TRANSITION } from "../utils/styles";

function useFocus() {
  const [isFocused, setIsFocused] = useState(false);
  return {
    isFocused,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
  };
}

function Contact() {
  const theme = useTheme();
  const isTablet = useIsTablet();
  const isSmallMobile = useIsSmallMobile();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const nameFocus = useFocus();
  const emailFocus = useFocus();
  const messageFocus = useFocus();

  const collaborationPoints = [
    "Product feature development and MVP builds",
    "Frontend performance optimization and UI modernization",
    "API integrations, automation, and platform scaling",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }
    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const inputStyle = (focusState) => ({
    width: "100%",
    padding: "0.85rem 1rem",
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    fontSize: FONT_SIZE.base,
    color: theme.colorTextPrimary,
    borderRadius: RADIUS.md,
    outline: "none",
    background: theme.glassBg,
    border: focusState.isFocused
      ? `1px solid ${theme.colorPrimary}`
      : theme.glassBorder,
    boxShadow: focusState.isFocused
      ? `0 0 15px rgba(${theme.colorPrimaryRgb}, 0.25)`
      : "none",
    backdropFilter: theme.glassBlur,
    WebkitBackdropFilter: theme.glassBlur,
    transition: TRANSITION.fast,
    ...(focusState.isFocused
      ? { background: `rgba(${theme.colorPrimaryRgb}, 0.03)` }
      : {}),
  });

  const statusStyle = {
    padding: SPACING.md,
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    borderRadius: RADIUS.md,
    textAlign: "center",
    border: "1px solid transparent",
    ...(status.includes("successfully")
      ? {
          borderColor: "rgba(74, 222, 128, 0.4)",
          background: "rgba(74, 222, 128, 0.08)",
          color: "#4ade80",
        }
      : status.includes("fill")
      ? {
          borderColor: "rgba(248, 113, 113, 0.4)",
          background: "rgba(248, 113, 113, 0.08)",
          color: "#f87171",
        }
      : {
          borderColor: `rgba(${theme.colorPrimaryRgb}, 0.3)`,
          background: `rgba(${theme.colorPrimaryRgb}, 0.05)`,
          color: theme.colorPrimaryLight,
        }),
  };

  const styles = {
    pageWrapper: {
      paddingBottom: SPACING.xxl,
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "0.8fr 1.2fr",
      gap: SPACING.xl,
    },
    infoPanel: {
      display: "flex",
      flexDirection: "column",
      gap: SPACING.md,
      justifyContent: "flex-start",
      width: "100%",
    },
    infoCard: {
      ...glass(theme),
      display: "flex",
      alignItems: "center",
      padding: SPACING.lg,
      gap: SPACING.md,
      width: "100%",
      textAlign: "left",
      cursor: "default",
      transition: TRANSITION.normal,
    },
    icon: {
      width: "50px",
      height: "50px",
      background: `rgba(${theme.colorPrimaryRgb}, 0.1)`,
      border: `1px solid rgba(${theme.colorPrimaryRgb}, 0.25)`,
      borderRadius: RADIUS.md,
      fontSize: FONT_SIZE.lg,
      ...flexCenter(),
    },
    infoCardLabel: {
      fontSize: FONT_SIZE.sm,
      color: theme.colorTextSecondary,
      fontWeight: FONT_WEIGHT.semibold,
      marginBottom: SPACING.xxs,
    },
    infoCardValueLink: {
      fontSize: FONT_SIZE.md,
      color: theme.colorTextPrimary,
      textDecoration: "none",
      fontWeight: FONT_WEIGHT.medium,
    },
    infoCardValueText: {
      fontSize: FONT_SIZE.md,
      color: theme.colorTextPrimary,
      fontWeight: FONT_WEIGHT.medium,
    },
    helpCard: {
      ...glass(theme),
      padding: SPACING.lg,
    },
    helpTitle: {
      marginBottom: SPACING.sm,
    },
    helpList: {
      listStyle: "none",
      display: "grid",
      gap: SPACING.sm,
    },
    helpItem: {
      color: theme.colorTextSecondary,
      fontSize: FONT_SIZE.sm,
      position: "relative",
      paddingLeft: "1rem",
    },
    helpBullet: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: theme.colorPrimary,
      boxShadow: `0 0 8px rgba(${theme.colorPrimaryRgb}, 0.8)`,
      position: "absolute",
      left: 0,
      top: "0.5rem",
    },
    formCard: {
      ...glass(theme),
      padding: isSmallMobile ? SPACING.lg : SPACING.xl,
      textAlign: "left",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: SPACING.lg,
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: SPACING.xs,
    },
    label: {
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.semibold,
      color: theme.colorTextSecondary,
    },
    btnWrapper: {
      display: "flex",
      justifyContent: "flex-end",
    },
    submitBtn: {
      padding: "0.85rem 2rem",
    },
  };

  return (
    <div style={styles.pageWrapper}>
      <Section
        id="contact"
        title="Get In Touch"
        subtitle="Have a project in mind or need a technical partner to scale your product? Let's talk."
      >
        <div style={styles.contactGrid}>
          <div style={styles.infoPanel}>
            <div
              style={styles.infoCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = `rgba(${theme.colorPrimaryRgb}, 0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = theme.glassBorder;
              }}
            >
              <div style={styles.icon}>📬</div>
              <div>
                <h4 style={styles.infoCardLabel}>
                  Email Address
                </h4>
                <p>
                  <a
                    href="mailto:yashubhut@gmail.com"
                    style={styles.infoCardValueLink}
                  >
                    yashubhut@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div
              style={styles.infoCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = `rgba(${theme.colorPrimaryRgb}, 0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = theme.glassBorder;
              }}
            >
              <div style={styles.icon}>📍</div>
              <div>
                <h4 style={styles.infoCardLabel}>
                  Current Location
                </h4>
                <p style={styles.infoCardValueText}>
                  Gujarat, India
                </p>
              </div>
            </div>

            <div
              style={styles.infoCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = `rgba(${theme.colorPrimaryRgb}, 0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = theme.glassBorder;
              }}
            >
              <div style={styles.icon}>💼</div>
              <div>
                <h4 style={styles.infoCardLabel}>
                  Open to Work
                </h4>
                <p style={styles.infoCardValueText}>
                  Full‑Time & Freelance Contracts
                </p>
              </div>
            </div>

            <div style={styles.helpCard}>
              <h4 style={styles.helpTitle}>
                How I can help
              </h4>
              <ul style={styles.helpList}>
                {collaborationPoints.map((point) => (
                  <li key={point} style={styles.helpItem}>
                    <div style={styles.helpBullet} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={styles.formCard}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label htmlFor="name" style={styles.label}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle(nameFocus)}
                  placeholder="John Doe"
                  required
                  onFocus={nameFocus.onFocus}
                  onBlur={nameFocus.onBlur}
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle(emailFocus)}
                  placeholder="john@example.com"
                  required
                  onFocus={emailFocus.onFocus}
                  onBlur={emailFocus.onBlur}
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="message" style={styles.label}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...inputStyle(messageFocus),
                    resize: "vertical",
                  }}
                  placeholder="Let's build something epic together..."
                  required
                  onFocus={messageFocus.onFocus}
                  onBlur={messageFocus.onBlur}
                />
              </div>

              <div style={styles.btnWrapper}>
                <Button type="submit" variant="primary" style={styles.submitBtn}>
                  Send Message
                </Button>
              </div>

              {status && <div style={statusStyle}>{status}</div>}
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
