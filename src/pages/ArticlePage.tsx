import { useParams } from "react-router-dom";
import { HeroSection } from "@/components/FAQ/HeroSection";
import { Breadcrumb } from "@/components/FAQ/Breadcrumb";
import { CategoryTree } from "@/components/FAQ/CategoryTree";
import { allArticles } from "@/data/articles";

// Article content data
const articleContent: Record<string, {
  title: string;
  categoryId: string;
  categoryTitle: string;
  subcategoryTitle?: string;
  content: string;
}> = {
  "creating-first-account": {
    title: "Creating Your First Account",
    categoryId: "get-started",
    categoryTitle: "Get started",
    content: `
# Creating Your First Account

Welcome! Getting started is easy and takes just a few minutes.

## Step 1: Navigate to the Sign Up Page

Click the "Sign Up" button in the top right corner of the homepage. You'll be directed to our registration form.

## Step 2: Enter Your Information

Fill in the following required fields:
- **Email Address**: Use a valid email address that you have access to
- **Password**: Create a strong password with at least 8 characters
- **Full Name**: Enter your first and last name
- **Company Name** (optional): If you're signing up for your organization

## Step 3: Verify Your Email

After submitting the form, check your email inbox for a verification message. Click the verification link to activate your account.

## Step 4: Complete Your Profile

Once verified, you'll be redirected to your dashboard where you can:
- Upload a profile picture
- Set your timezone
- Configure notification preferences
- Add additional team members

## Common Issues

**Not receiving the verification email?**
- Check your spam folder
- Make sure you entered the correct email address
- Wait a few minutes and try resending the verification email

**Password requirements not met?**
Your password must contain:
- At least 8 characters
- One uppercase letter
- One lowercase letter
- One number
- One special character

## Next Steps

After creating your account, we recommend:
1. Reading the [Understanding the Dashboard Overview](#) article
2. Setting up your user profile completely
3. Inviting your team members

Need help? Contact our support team at support@example.com
    `,
  },
  "understanding-dashboard": {
    title: "Understanding the Dashboard Overview",
    categoryId: "get-started",
    categoryTitle: "Get started",
    content: `
# Understanding the Dashboard Overview

Your dashboard is the central hub for all your activities. Let's explore its key components.

## Main Navigation Bar

Located at the top of the screen, the navigation bar provides quick access to:
- **Home**: Return to the main dashboard
- **Projects**: View and manage all your projects
- **Team**: Manage team members and permissions
- **Settings**: Configure your account preferences

## Dashboard Widgets

The main dashboard area contains several important widgets:

### Recent Activity
Shows your latest actions and updates from your team. This helps you stay informed about project progress.

### Quick Actions
Commonly used features are available here for quick access:
- Create new project
- Invite team member
- Upload files
- Generate reports

### Statistics Overview
View key metrics at a glance:
- Total projects
- Active team members
- Storage usage
- Recent uploads

## Sidebar Menu

The left sidebar provides detailed navigation options organized by category. You can collapse or expand this menu using the hamburger icon.

## Customizing Your Dashboard

You can personalize your dashboard by:
- Rearranging widget positions (drag and drop)
- Hiding widgets you don't need
- Setting your preferred default view
- Choosing between light and dark themes

## Tips for Efficiency

- Use keyboard shortcuts (press ? to see all shortcuts)
- Pin frequently used projects to the top
- Set up notifications for important updates

Need help? Contact our support team at support@example.com
    `,
  },
  "5": {
    title: "How to update payment methods",
    categoryId: "billing",
    categoryTitle: "Billing",
    subcategoryTitle: "Payments",
    content: `
# How to Update Payment Methods

Keeping your payment information up to date ensures uninterrupted service. Here's how to manage your payment methods.

## Accessing Payment Settings

Navigate to your account settings and select the Billing section. From there, click on "Payment Methods" to view all saved payment options.

## Adding a New Payment Method

To add a new payment method:

1. Click the "Add Payment Method" button
2. Select your preferred payment type:
   - **Credit Card**: Visa, Mastercard, American Express, or Discover
   - **Debit Card**: Most major debit cards accepted
   - **Bank Account**: Direct bank transfers (ACH)
3. Enter your payment details securely
4. Click "Save" to add the method to your account

## Updating an Existing Payment Method

If you need to update card details or expiration dates:

1. Locate the payment method in your list
2. Click the "Edit" icon next to the payment method
3. Update the necessary information
4. Confirm your changes by clicking "Update"

## Setting a Default Payment Method

You can designate one payment method as your default:

- Click "Set as Default" next to your preferred payment method
- All future charges will automatically use this method
- You can change your default payment method at any time

## Removing a Payment Method

To remove an outdated or unused payment method:

1. Find the payment method you want to remove
2. Click the "Remove" button
3. Confirm the removal in the dialog box

**Note**: You cannot remove your default payment method while you have an active subscription. Set a different method as default first.

## Common Issues

**Payment method won't save?**
- Verify all required fields are filled correctly
- Check that your card hasn't expired
- Ensure your billing address matches your card records
- Try a different browser if the issue persists

**Card declined?**
- Contact your bank to ensure they're not blocking the transaction
- Verify you have sufficient funds or credit available
- Check if your card is enabled for online transactions
- Make sure the card details are entered correctly

## Security Information

All payment information is:
- Encrypted using industry-standard SSL technology
- Processed through PCI-compliant payment processors
- Never stored on our servers in plain text
- Protected by multiple layers of security

## Need Assistance?

If you encounter any issues updating your payment methods:
- Contact our billing support team at billing@example.com
- Use the live chat feature in your dashboard
- Call our support line at 1-800-SUPPORT

We're here to help ensure your payment process is smooth and secure!
    `,
  },
  "setting-up-profile": {
    title: "Setting Up Your User Profile",
    categoryId: "get-started",
    categoryTitle: "Get started",
    content: `
# Setting Up Your User Profile

A complete profile helps your team recognize you and improves collaboration.

## Accessing Your Profile

1. Click your avatar in the top right corner
2. Select "Profile Settings" from the dropdown menu
3. You'll be directed to your profile configuration page

## Profile Information

### Basic Information
- **Profile Picture**: Upload a clear photo (max 5MB, JPG or PNG)
- **Display Name**: How your name appears to other users
- **Job Title**: Your role or position
- **Department**: Your team or department name
- **Bio**: A brief description about yourself (optional)

### Contact Information
- **Primary Email**: Your main contact email (already set during registration)
- **Secondary Email**: Alternative email address (optional)
- **Phone Number**: For important notifications (optional)
- **Time Zone**: Ensures correct timestamps for your location

## Notification Preferences

Configure how you want to receive notifications:

### Email Notifications
- Project updates
- Team mentions
- System announcements
- Weekly summaries

### In-App Notifications
- Real-time alerts
- Task assignments
- Comments and replies
- File uploads

### Push Notifications
Available if you have our mobile app installed:
- Urgent messages
- Deadline reminders
- Team activity

## Privacy Settings

Control who can see your information:
- **Public Profile**: Visible to all users in your organization
- **Team Only**: Only visible to team members
- **Private**: Only you can see your full profile

## Security Settings

While in your profile settings, you can also:
- Change your password
- Enable two-factor authentication
- Review active sessions
- Manage connected devices

## Profile Completion Tips

A complete profile should include:
- ✓ Profile picture
- ✓ Job title and department
- ✓ Time zone
- ✓ Notification preferences
- ✓ Bio (helps team members understand your role)

## Best Practices

- Keep your contact information current
- Use a professional profile picture
- Update your status when on vacation or out of office
- Review notification settings regularly to avoid overload

Need to update other team members' profiles? You'll need admin permissions. Contact your administrator for help.
    `,
  },
  "inviting-team-members": {
    title: "Inviting Team Members",
    categoryId: "get-started",
    categoryTitle: "Get started",
    content: `
# Inviting Team Members

Collaboration is at the heart of our platform. Here's how to invite your team.

## Who Can Invite Team Members?

Team invitation permissions depend on your role:
- **Admin**: Can invite unlimited members
- **Manager**: Can invite members to their projects
- **Member**: Can suggest members (requires admin approval)

## How to Invite Team Members

### Method 1: Email Invitation

1. Navigate to **Team** in the main menu
2. Click the **Invite Members** button
3. Enter email addresses (one per line or comma-separated)
4. Select a default role for the invitees
5. Add a personal message (optional)
6. Click **Send Invitations**

### Method 2: Invitation Link

For bulk invitations:
1. Go to **Team** → **Invite Members**
2. Click **Generate Invitation Link**
3. Set link expiration (24 hours, 7 days, or 30 days)
4. Copy and share the link with your team

### Method 3: Import from CSV

If you have a large team:
1. Download our CSV template
2. Fill in team member details
3. Upload the completed CSV file
4. Review and confirm the import

## User Roles and Permissions

When inviting members, assign appropriate roles:

### Admin
- Full access to all features
- Can manage billing and subscriptions
- Can add or remove team members
- Can delete projects

### Manager
- Can create and manage projects
- Can invite members to their projects
- Can view team analytics
- Cannot access billing

### Member
- Can participate in assigned projects
- Can create content and upload files
- Can comment and collaborate
- Cannot invite others

### Guest
- Limited access to specific projects
- Can view and comment only
- Cannot create new content
- Access expires after set period

## Managing Pending Invitations

Track invitation status in the Team section:
- **Pending**: Invitation sent, not yet accepted
- **Accepted**: Member has joined
- **Expired**: Invitation link expired
- **Declined**: User declined the invitation

You can resend or cancel pending invitations at any time.

## Best Practices

- Invite team members before creating projects
- Assign appropriate roles based on responsibilities
- Include a welcome message in your invitations
- Set up team guidelines document before inviting
- Use invitation links for events or training sessions

## Troubleshooting

**Invitation email not received?**
- Check the email address is correct
- Ask recipient to check spam folder
- Resend the invitation
- Try using an invitation link instead

**Unable to invite members?**
- Verify you have invitation permissions
- Check if you've reached your plan's user limit
- Contact your admin for assistance

## Next Steps

After inviting your team:
1. Create projects and assign members
2. Set up team communication channels
3. Schedule an onboarding call
4. Share important documentation

Need to remove a team member? See our article on Managing Team Members.
    `,
  },
  "quick-start-guide": {
    title: "Quick Start Guide for New Users",
    categoryId: "get-started",
    categoryTitle: "Get started",
    content: `
# Quick Start Guide for New Users

Get up and running in 15 minutes with this comprehensive quick start guide.

## Welcome! Let's Get Started

This guide will walk you through everything you need to know to start being productive immediately.

## Minute 1-3: Account Setup

✓ Create your account (if you haven't already)
✓ Verify your email address
✓ Complete your profile with basic information

## Minute 4-6: Explore the Dashboard

Take a moment to familiarize yourself with:
- Main navigation bar (top)
- Sidebar menu (left)
- Quick actions (center)
- Your profile menu (top right)

**Pro tip**: Press **?** anywhere in the app to see keyboard shortcuts.

## Minute 7-10: Create Your First Project

Let's create a project to organize your work:

1. Click **New Project** in the dashboard
2. Enter a project name
3. Add a brief description
4. Choose a project template (or start blank)
5. Click **Create Project**

Your first project is now ready!

## Minute 11-13: Invite Your Team

Work better together:

1. Go to **Team** in the main menu
2. Click **Invite Members**
3. Enter team email addresses
4. Assign appropriate roles
5. Click **Send Invitations**

Your team will receive invitation emails immediately.

## Minute 14-15: Configure Essential Settings

Quick settings to configure:

### Notifications
- Go to **Settings** → **Notifications**
- Choose your preferred notification methods
- Set quiet hours if needed

### Security
- Enable two-factor authentication
- Review active sessions
- Set up recovery email

### Preferences
- Choose your theme (light/dark)
- Set your time zone
- Configure language preferences

## Essential Features Overview

### Projects
Organize your work into projects. Each project can contain:
- Files and documents
- Tasks and to-do lists
- Team discussions
- Shared resources

### Collaboration
- Real-time editing
- Comments and mentions (@username)
- File sharing and version control
- Team chat

### Organization
- Create folders and categories
- Use tags for easy filtering
- Set up custom workflows
- Create project templates

## Common First Tasks

Most new users start by:
1. Creating a team workspace
2. Uploading existing files
3. Setting up their first project
4. Inviting team members
5. Creating initial tasks

## Keyboard Shortcuts (Most Used)

- **Cmd/Ctrl + K**: Quick search
- **Cmd/Ctrl + N**: New project
- **Cmd/Ctrl + /**: Open command palette
- **?**: View all shortcuts

## Getting Help

If you need assistance:
- Press **F1** for in-app help
- Use the search bar to find help articles
- Click the **Help** button (bottom right)
- Email support@example.com
- Join our community forum

## Recommended Next Steps

Now that you're set up, explore these features:

1. **Customize Your Dashboard**
   - Rearrange widgets
   - Pin important projects
   - Set up custom views

2. **Set Up Integrations**
   - Connect your calendar
   - Link communication tools
   - Import from other platforms

3. **Learn Advanced Features**
   - Automation and workflows
   - Custom reports
   - API integration

## Tips for Success

- Start small and expand gradually
- Use templates to save time
- Regularly review and organize projects
- Enable notifications for important updates
- Keep your profile information current

## Need More Guidance?

Check out these articles:
- Understanding the Dashboard Overview
- Creating Your First Account
- Setting Up Your User Profile
- Inviting Team Members

## Video Tutorials

Prefer video? Watch our quick start video series:
- Account Setup (3 min)
- Dashboard Tour (5 min)
- First Project (7 min)
- Team Collaboration (10 min)

Welcome aboard! We're excited to have you here. If you have any questions, our support team is always ready to help.
    `,
  },
};

export default function ArticlePage() {
  const { categoryId, articleId } = useParams<{ categoryId: string; articleId: string }>();
  const article = articleId ? articleContent[articleId] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <HeroSection />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <p className="text-center text-muted-foreground">Article not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="flex">
        <CategoryTree />
        <div className="flex-1 max-w-4xl mx-auto px-4 py-8">
          <Breadcrumb 
            categoryTitle={article.categoryTitle} 
            categoryId={article.categoryId}
            subcategoryTitle={article.subcategoryTitle}
            articleTitle={article.title}
          />

          {/* Article Content */}
          <article className="prose prose-slate max-w-none">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {article.content.split('\n').map((line, index) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-4xl font-bold mb-6 mt-8 first:mt-0">{line.replace('# ', '')}</h1>;
                  } else if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-semibold mb-4 mt-8">{line.replace('## ', '')}</h2>;
                  } else if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold mb-3 mt-6">{line.replace('### ', '')}</h3>;
                  } else if (line.startsWith('- ')) {
                    return <li key={index} className="ml-6 mb-2">{line.replace('- ', '')}</li>;
                  } else if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={index} className="font-bold mb-2">{line.replace(/\*\*/g, '')}</p>;
                  } else if (line.match(/^\d+\./)) {
                    return <li key={index} className="ml-6 mb-2 list-decimal">{line.replace(/^\d+\.\s/, '')}</li>;
                  } else if (line.trim() === '') {
                    return <div key={index} className="h-4" />;
                  } else {
                    return <p key={index} className="mb-4">{line}</p>;
                  }
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
