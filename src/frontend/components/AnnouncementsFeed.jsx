import { memo } from 'react';

const AnnouncementsFeed = ({ announcements }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Announcements</h2>
      <ul className="space-y-4">
        {announcements.map((announcement) => (
          <li key={announcement.id} className="border-b pb-2">
            <p className="text-sm text-gray-900">{announcement.message}</p>
            <p className="text-xs text-gray-500">
              By {announcement.author} on {new Date(announcement.timestamp).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(AnnouncementsFeed);